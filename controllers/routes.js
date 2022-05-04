const { Router } = require("express")
const cors = require("cors")
const path = require("path")

const { 
    new_user,
    upd_user,
    del_user,
    login,
    verifyJwt
} = require("./api_server")

const router = Router()

const corsOptions = {
    'origin': '*',
    'optionsSuccessStatus': 200,
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
}

// router.get('/', (req, res) => {
//     let rootPath = path.resolve('./')
//     console.log("PathRoot: ", );
//     res.sendFile(rootPath + '/public/views/index.php');
// })
router.post('/new_user', cors(corsOptions), new_user)
router.post('/upd_user', cors(corsOptions), verifyJwt, upd_user)
router.post('/del_user', cors(corsOptions), verifyJwt, del_user)
router.post('/login', cors(corsOptions), login)

module.exports = router