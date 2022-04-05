import React from "react"
import { Link,  useParams } from "react-router-dom"

export default function Articles() {

    const [url, setUrl] = React.useState({});
    const [loaded, setLoaded] = React.useState(false);


    // ambil file route.json yang berisi arah untuk url
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

        <div className="container mx-auto text-center text-slate-900">
            <h1 className="text-5xl mt-4">Articles</h1>

            <div>
                {!loaded ? <i>loading...</i> :
                    <ul className="mt-4">
                        {/* Lakukan pengulangan untuk halaman Articles berupa children dari Articles di route.json */}
                        {url.nav_menu[2].children.map(function (u) {
                            return <li className="my-4" key={u.name}><Link to={u.url}><span className="border-b-2 border-slate-800 text-2xl font-semibold hover:text-slate-600">{u.name}</span></Link></li>
                        })}
                    </ul>
                }
            </div>
        </div>
    )
}


export function HalamanArticles() {

        // Gunakan useParams untuk mengambil parameter url

    const paramsUrl = useParams()

    return (
        <div className="container mx-auto pt-8 px-2">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Halaman Articles</h1>
            
            {/* Kemudian tampilkan apa yang kita dapat dari parameter url */}
            <h2 className="text-xl">{paramsUrl.articleTitle}</h2>
        </div>

    )
}