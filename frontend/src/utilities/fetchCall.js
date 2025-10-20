 const addService = async (e) => {
        e.preventDefault()
        try {
            const isAdd = true ? 'add' : 'modify'
            const url = `${backend}/service/${isAdd}`
            const method = 'POST'
            const req = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ServiceData)
            })
            const res = await req.json()
            if (res.success) {
                alert('service is added')
                setFormOpen(false)
            } else {
                console.log(res.err)
            }
        } catch (err) {
            console.log(err)
        }

    }