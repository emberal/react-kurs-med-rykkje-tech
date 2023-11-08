import React, { useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    TextField,
    Button,
    Stack,
} from "@mui/material";

const ToDoList = () => {
    const [todos, setTodos] = useState([]); // Holder styr på todos som en array
    const [input, setInput] = useState(""); // Holder styr på brukerens input

    // Legger til en ny todo i listen
    const addTodo = () => {
        if (input.trim() !== "") {
            setTodos([...todos, input.trim()]);
            setInput(""); // Nullstiller input feltet etter å ha lagt til en todo
        }
    };

    // Håndterer endringer i input-feltet
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    function deleteTodo(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    function thanosify() {
        setTodos(todos.filter(() => Math.random() > 0.5));
    }

    return (
        <Stack direction="column" spacing={ 1 }>
            <TextField
                label="Ny oppgave"
                variant="outlined"
                value={ input }
                onChange={ handleInputChange }
                sx={ { background: "white" } }
            />
            <Button onClick={ addTodo } variant="contained" style={ { margin: "8px" } }>
                Legg til
            </Button>
            <Button onClick={ thanosify } variant={"contained"} color={"error"}>
                Thanosify
            </Button>
            <List>
                { todos.map((todo, index) => (
                    <ListItem key={ index } secondaryAction={ null }>
                        <ListItemText primary={ todo } />
                        <Button onClick={ () => deleteTodo(index) }>
                            Slett
                        </Button>
                    </ListItem>
                )) }
            </List>
        </Stack>
    );
};

export default ToDoList;
