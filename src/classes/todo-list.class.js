import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        //this.todos = [];
        this.leerLocalStorage();

    }

    nuevoTodo( todo ) {

         this.todos.push( todo );
         this.guardarEnLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarEnLocalStorage();

    }

    marcarCompletado( id ) {

        for( const todo of this.todos ) {

            if( todo.id == id) {

                todo.completado = !todo.completado
                this.guardarEnLocalStorage();
                break;
            }
            

        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => todo.completado === false );
        this.guardarEnLocalStorage();
        
    }

    guardarEnLocalStorage() {

        localStorage.setItem('todo', JSON.stringify( this.todos ) );

    }

    leerLocalStorage() {

        // if( localStorage.getItem('todo') ) {

        //     this.todos = JSON.parse( localStorage.getItem('todo') );

        // } else {
        //     this.todos = [];
        // }

        this.todos = localStorage.getItem('todo') ? this.todos = JSON.parse( localStorage.getItem('todo') ) : [];
        this.todos = this.todos.map(todo => Todo.fromJson( todo ) );


    }
}