// Code to check if file exists in the database
// Created date: 09/15/2024

// MUST GO IN AND CHANGE THE FILES TO THE CORRECT PATHS
import fs from "fs";
import { exit } from "process";
// we want to invert the result by adding a ! before the fs.existsSync method like so:
if (!fs.existsSync("db.json")) {
    console.log("Data exists!");
    exit(1);
}
// This is nescessary when building other functionalities that depend on the file

// The code above is a simple check to see if the file exists. If it does, it will log "Data exists!" to the console. If it doesn't, it will log "Data does not exist!" to the console.
export default function dbFileCheck() {
    if (!fs.existsSync("db.json")) {
        console.log("Data does not exist!");
        exit(1);
    }
}