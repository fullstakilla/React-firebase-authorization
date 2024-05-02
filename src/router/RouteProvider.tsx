import { Route, Routes } from "react-router-dom"
import { routerConfig } from "./routes"
import { Suspense } from "react"

const RouteProvider = () => {
    return (
        <Routes>
            {
                routerConfig.map(({path, element}) =>
                    <Route
                        path={path}
                        element={<Suspense fallback={<p>Loading...</p>}> {element} </Suspense>}
                        key={path}/>
                )
            }
        </Routes>
    )
}

export {RouteProvider as AppRouter}