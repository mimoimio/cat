const sqlite3 = require('sqlite3').verbose();
const { NextResponse } = require('next/server');

const db = new sqlite3.Database('database/todo.db');

export async function GET(req) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM todos", [], (err, rows) => {
      if (err) {
        return reject(NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }));
      }
      resolve(NextResponse.json(rows));
    });
  });
}

export async function POST(req) {
  const { task } = await req.json();
  
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO todos (task, isCompleted) VALUES (?, ?)", [task, false], function(err) {
      if (err) {
        return reject(NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }));
      }
      resolve(NextResponse.json({ id: this.lastID, task, isCompleted: false }));
    });
  });
}
