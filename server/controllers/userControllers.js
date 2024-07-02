const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

const httpError = require("../models/errorModel")

const jwt = require('jsonwebtoken')

const fs = require('fs')
const path = require('path')
const {v4: uid} = require('uid')

//==========REGISTER A NEW USER
//POST : api/users/register
//UNPROTECTED


const registerUser =async (req, res, next)=>{
   try {
       const {name, email, password, password2} = req.body
       if(!name || !email || !password){
        return next(new httpError('Fill in all fields.', 422))
       }

       const newEmail = email.toLowerCase()

       const emailExists = await User.findOne({email: newEmail})

       if(emailExists){
        return next(new httpError("Email already exists.", 422))
       }
       if((password.trim()).length < 6){
        return next(new httpError('Password should be atleast 6 characters.', 422))
       }
       if(password != password2){
        return next(new httpError('Password do not match.', 422))
       }

       const salt = await bcrypt.genSalt(10)
       const hashedPass= await bcrypt.hash(password, salt)
       const newUser = await User.create({name, email: newEmail, password: hashedPass})
       res.status(201).json(`New user ${newUser.name} registered.`)
   } catch (error) {
    return next(new httpError('User registration failed.', 422))
   }
}






//==========LOGIN A NEW USER
//POST : api/users/login
//UNPROTECTED

const loginUser = async(req, res, next)=>{
    try {
            const {email, password} = req.body
            if(!email || !password){
                return next(new httpError('Fill in all fields.', 422))
            }
            const newEmail = email.toLowerCase()
            const user = await User.findOne({email: newEmail})
            if(!user){
                return next(new httpError('Invalid credentials.', 422))
            }
            const comparePass = await bcrypt.compare(password, user.password)
            if(!comparePass){
                return next(new httpError('Invalid credentials.', 422))
            }

            const {_id: id, name} = user
            const token = jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn: "1d"})
            res.status(200).json({token, id, name})
        
    } catch (error) {
        return next(new httpError('login failed. Please check your credentials.', 422))
    }
}

//========== USER PROFILE
//POST : api/users/:id
//PROTECTED

const getUser = async(req, res, next)=>{
    try {
        const {id} = req.params
        const user = await User.findById(id).select('-password')
        if(!user){
            return next('User not found.', 404)
        }
        res.status(200).json(user)
    } catch (error) {
        return next(new httpError(error)) 
    }
}

//==========change USER avatar
//POST : api/users/change-avatar
//PROTECTED

const changeAvatar = async(req, res, next)=>{
    try {
        if(!req.files.avatar){
            return next(new httpError("Please choose an image.", 422))
        }

        // find user from database

        const user = await User.findById(req.user.id)

    //delete old avatara if exists

        if(user.avatar){
            fs.unlink(path.join(__dirname, '..', 'uploads', user.avatar), (err)=>{
                if(err){
                    return next(new httpError(err))
                }
            })
        }

        const {avatar} = req.files
        //check avatar size
        if(avatar.size > 50000){
            return next(new httpError('Profile pictue is too big. Should be less than 500kb.', 422))
        }

        let fileName
        fileName = avatar.name
        let splittedFileName = fileName.split('.')
        let newFileName = splittedFileName[0] + uid() + '.' + splittedFileName[splittedFileName.length - 1]
        avatar.mv(path.join(__dirname, '..', 'uploads', newFileName), async(err)=>{
            if(err){
            return next(new httpError(err))
            }

            const updateAvatar = await User.findByIdAndUpdate(req.user.id, {avatar: newFileName}, {new: true})
            if(!updateAvatar){
                return next(new httpError("Avatar couldn't be update.", 422))
            }
            res.send(200).json(updateAvatar)
        })
    } catch (error) {
        return next(new httpError(error))
    }
}

//========== edit user details from profile
//POST : api/users/edit-user
//PROTECTED

const editUser = async(req, res, next)=>{
   try {
    const {name, email, currentPassword, newPassword, confirmNewPassword} = req.body
    if(!name || !email || !currentPassword || !newPassword){
        return next(new httpError('Fill in all fields.', 422))
    }

    //get user from database
    const user = await User.findById(req.user.id)
    if(!user){
        return next(new httpError('User not found.', 403))
    }
    // make sure new email doesnt already exist

    const emailExist = await User.findOne({email})

    if(emailExist && (emailExist._id != req.user.id)){
        return next(new httpError("Email already exist.", 422))
    }

    //compare current password to db password
    const validateUserPassword = await bcrypt.compare(currentPassword, user.password)
    if(!validateUserPassword){
        return next(new httpError('Invalid current password,', 422))
    }

    //compare new password
    if(newPassword !== confirmNewPassword){
        return next(new httpError("New password do not match.", 422))
    }

    //hash new password
    const salt = await bcrypt.genSalt(10)
    const Hash = await bcrypt.hash(newPassword, salt)

    //update user info in db
    const newInfo = await User.findByIdAndUpdate(req.user.id, {name, email, password: Hash},{new:true})
    res.status(200).json(newInfo)
   } catch (error) {
    return next(new httpError(error))
   }
}

//========== get user
//POST : api/users/edit-user
//UNPROTECTED

const getUsers = async(req, res, next)=>{
    try {
        const users = await User.find().select('-password')
        res.json(users)
    } catch (error) {
        return next(new httpError(error)) 
    }
}


module.exports = {registerUser, loginUser, getUser, editUser, changeAvatar, getUsers}
