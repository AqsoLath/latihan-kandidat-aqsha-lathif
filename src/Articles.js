import React from "react"
import { Link } from "react-router-dom"

export default function Articles() {

    const [url, setUrl] = React.useState({});
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(function () {
        async function getData() {
            const request = await fetch('./route.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            })

            const data = await request.json()

            setUrl(data)

            setLoaded(true)

        }

        getData();

    }, [])

    return (

        <div>
            <h1 className="text-5xl">Articles</h1>

            <div>
                {!loaded ? <i>loading...</i> :
                    <ul>
                        {url.nav_menu[2].children.map(function (u) {
                            return <li key={u.name}><Link to={u.url}><span>{u.name}</span></Link></li>
                        })}
                    </ul>
                }
            </div>
        </div>
    )
}


export function HalamanArticles() {


    return (
        <div>Halaman Articles</div>
    )
}