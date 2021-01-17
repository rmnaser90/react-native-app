import { action, makeObservable, observable, runInAction } from 'mobx'
const axios = require('axios')

class MainStore{
    constructor(){
        this.books=[]
        makeObservable(this,{
            books: observable,
            getBooks: action
        })
        this.getBooks()
    }

    async getBooks(){
        const books =await axios.get('https://www.googleapis.com/books/v1/volumes?q=physics+inauthor')
        runInAction(()=>{
            this.books=books.data.items
        })
    }
}

export default MainStore