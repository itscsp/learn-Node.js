const users = (req, res) => {
    res.json([
        {
            'id': '1',
            'name':'abcd'
        },
        {
            'id': '2',
            'name':'efg'
        },
        {
            'id': '3',
            'name':'hifj'
        },
    ]
    ) 
}

module.exports = {users}