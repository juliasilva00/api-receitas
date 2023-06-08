const router = require("express").Router()

const receitasController = require("../controller/receitasController")


//criar
router.route("/receita")
.post(
    (req, res) => receitasController.create(req, res)
)

//obter todos
router.route("/receita")
.get(
    (req, res) => receitasController.getAll(req,res)
)

//obter pelo id
router.route('/receita/:id')
.get(
    (req, res) => receitasController.findById(req, res)
)

//atualizar pelo Id
router.route('/receita/:id').patch(
    (req,res) => receitasController.findByIdAndUpdate(req,res)
)


//Deletar pelo ID
router.route("/receita/:id").delete((req,res) => receitasController.deleteById(req,res));



module.exports = router;