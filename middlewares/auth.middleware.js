app.use(authMiddleware)

app.get('/user', authMiddleware, (req, res) => {
    const user = {id:1, name: 'user1', password: '123123'}
    res.json(user)
})


export const authMiddleware = (req, res, next) =>{
    
    const token = req.headers.authorization

    if (!token){
        return res.status(401).json({msg: "No autorizado"})
    }

    next()
}