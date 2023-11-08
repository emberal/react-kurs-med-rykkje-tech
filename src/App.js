import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function App() {

    const [data, setData] = useState("Henter data fra mitt.uib.no...")

    useEffect(() => {
        setTimeout(() => setData("Nei"), 3000);
    }, [])

    return (
        <Box sx={ {
            width: "fit-content",
            margin: "auto",
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
        } } textAlign={"center"}>
            <Typography>Har innlevering for oblig 1 i INF122 blitt lagt ut?</Typography>
            <Typography variant={ "h1" }>{data}</Typography>
        </Box>
    );
}
