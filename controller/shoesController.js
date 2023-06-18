// Shoes model
const Shoe = require('./../models/shoesModel')

exports.getAllShoes = async (req, res) => {
    try {
        const shoes = await Shoe.find();

        res.status(200).json({
            status: 'success',
            results: shoes.length,
            data: {
                shoes
            }
        });
    }
    catch (err) {
        res.status(404).json({
            status: "failure",
            message: err
        })
    }
};

exports.getShoe = async (req, res) => {
    try {
        const shoe = await Shoe.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                shoe
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "failure",
            message: err
        })
    }
};
//adicionar sapato
exports.createShoe = async (req, res) => {
    try {
        const newShoe = await Shoe.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                Shoe: newShoe
            }
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "Failed",
            message: err
        })
    }

};
//botão para atualizar as informações do sapato
exports.updateShoe = async (req, res) => {
    try{
        const updatedShoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
            
        res.status(200).json({
            status: 'success',
            data: {
                shoe: updatedShoe
            }
        });
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            status: "Failed",
            message: err
        })
    }
};
//opção para deletar algum sapato 
exports.deleteShoe = async (req, res) => {
    try{
        await Shoe.findByIdAndRemove(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null
        });
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            status: "Failed",
            message: err
        })
    } 
};