import { Landing, Users, AddUsers } from "../views/AdminPanel";

export default {
    path: "/admin",
    component: Landing,
    children: [
        { path: 'users', component: Users },
        { path: 'users/add', component: AddUsers }
    ]
};


