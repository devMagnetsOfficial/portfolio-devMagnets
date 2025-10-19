 const backend = 'http://localhost:2030'
    const fetchProjects = async () => {
        console.log('fetching projects ....')
        try {
            const req = await fetch(`${backend}/portfolio/fetch`, {
                method: 'GET'
            })
            const res = await req.json()
            if (res.success) {
                setProjects(res.projects)
            }
            else {
                console.log('err in backend while fetching projects from databse')
            }
        } catch (err) {
            console.log('err (while fetching the projects list)' + err)
        }
    }
    useEffect(() => {
        fetchProjects()
    }, [])