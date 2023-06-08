const { Receitas: receitasModel } = require("../model/Receitas");

const receitasController = {

    create: async(req, res) => {
        try {
            const receitas = {
                imagemUrl: req.body.imagemUrl,
                dificuldade: req.body.dificuldade,
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                ingredientes: req.body.ingredientes,
                modoDePreparo: req.body.modoDePreparo
            };

            const response = await receitasModel.create(receitas);
        
            res.status(201).json({response, msg: "Receita criada com sucesso!!"})
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    },

    getAll: async(req, res) => {
        try {
            const response = await receitasModel.find();
            res.status(200).json(response)


        } catch (error) {
            res.status(400).json({message: error.message.status})
        }
    },

    findById: async(req,res) => {
        try {
            const response = await receitasModel.findById(req.params.id);
            res.status(200).json(response)

        } catch (error) {
            res.status(400).json({message: error.message.status})
 
        }

    },
    findByIdAndUpdate: async(req, res) => {
        try {
            const id = req.params.id;
            const atualizarDados = req.body;
            const options = { new: true };
    
            const result = await receitasModel.findByIdAndUpdate(
                id, atualizarDados, options
            )
    
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    deleteById: async (req, res) => {
        try {
          const id = req.params.id;
          const dado = await receitasModel.findByIdAndDelete(id);
          if (!dado) {
            return res.status(404).json({ message: "Documento não encontrado." });
          }
          return res.send(`Documento com o nome ${dado.titulo} foi deletado.`);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },


    
};

module.exports = receitasController;