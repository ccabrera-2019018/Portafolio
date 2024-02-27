'use strict'

import Animal from './animal.model.js'

export const registerP = async(req, res) => {
    try {
        //Capturar el formulario
        let data = req.body
        /*
        let user = await user.findOne({_id: data.keeper})
        if(!user) return res.status(404).send({message: 'Keeper not found'})
        */
        //Guardar la info en la DB
        let animal = new Animal(data)
        await animal.save()
        //Responder al usuario
        return res.send({message: `${animal.name} correctly registered`})
    } catch (err) {
        console.log(err)
        return res.status(500).send({message: 'Error registering pet'})
    }
}

export const updateP = async(req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let update = (data, id)
        if(!update) return res.status(400).send({message: 'Have submit some data that cannot be update or missing data'})
        let updatedAnimal = await Animal.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}    
        )
        if(!updatedAnimal) return res.status(401).send({message: 'Pet not found and not updated'})
        return res.send({message: 'Updated Pet', updatedAnimal})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error updating pet'})
    }
}

export const deleteP = async(req, res) => {
    try {
        let { id } = req.params
        let deletedAnimal = await Animal.findOneAndDelete({_id: id})
        if(!deletedAnimal) return res.status(404).send({message: 'Pet not found and not deleted'})
        return res.send({message: `Pet with name ${deletedAnimal.name} deleted successfully`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting pet'})
    }
}   

export const showPets = async(req, res) => {
    try {
        let results = await Animal.find();
        if(!results) return res.status(400).send({message:`Empty collection.`})
        return res.send({ results });
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Nothing to show'})
    }
}

export const searchPet = async(req, res) => {
    try {
        let { name } = req.params
        let searchP = await Animal.find({name})
        if(!searchP) return res.status(400).send({message:`Pet not found.`})
        return res.send({searchP})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error search the pet'})
    }
}

export const search = async(req, res)=>{
    try{
        //Obtener el parámetro de búsqueda
        let { search } = req.body
        //Buscar
        let animals = await Animal.find(
            {name: search}
        ).populate('keeper', ['name', 'phone'])
        //Validar la respuesta
        if(!animals) return res.status(404).send({message: 'Animals not found'})
        //Responder si todo sale bien
        return res.send({message: 'Animals found', animals})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error searching animals'})
    }
}