//import { Search } from "./";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../constants/constants";

const Navbar = () => (
    <Stack>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={45} />
        </Link>
    </Stack>

);

export default Navbar;