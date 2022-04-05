import React from "react";
import { Link } from "react-router-dom";


export default function Menu() {

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


        <div>
            {/* Jika sudah didapatkan lakukan pengulangan menggunakan fungsi map, yang berisi Link ke arah url yang didapatkan dari route.json untuk membuat menu*/}
            {!loaded ? <i>Loading...</i> :
                <ul className="mx-auto text-center bg-slate-800 pt-2 pb-1">
                    {url.nav_menu.map(function (u) {
                        return <li className=" mb-2 text-xl"  key={u.name}> <Link to={u.url}><span className="my-2 text-slate-200 hover:text-slate-400 transition-all">{u.name}</span></Link></li>
                    })}
                </ul>
            }

        </div>
    )
}