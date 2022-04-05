import React from "react";
import { Link } from "react-router-dom";


export default function Menu() {

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

    console.log(url)

    return (


        <div>
            {!loaded ? <i>Loading...</i> :
                <ul>
                    {url.nav_menu.map(function (u) {
                        return <li  key={u.name}> <Link to={u.url}><span>{u.name}</span></Link></li>
                    })}
                </ul>
                // <Link ><h3>  </h3></Link>
            }

        </div>
    )
}