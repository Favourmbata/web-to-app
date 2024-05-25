import Layout from "../layout/Layout";
import SignUp from "../component/signUp/SignUp";

export const Routes = [
    {
        path:"",
        element:<Layout/>,
        children:[
            {
              path:"",
                element:<SignUp/>
            }
        ]
    }
]