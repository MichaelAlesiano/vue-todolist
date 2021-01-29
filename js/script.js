let app = new Vue ({
  el : '#root',
  data : {
    newTodo : '',
    list : [
      'Fare i compiti',
      'Fare la spesa',
      'Pulire la stanza',
      'Pulire il bagno'
    ],
    delList : []
  },
  methods : {
    addTodo(){
      if (this.newTodo.length > 4) {
        this.list.push(this.newTodo);
        this.newTodo = '';
      } else {
        alert("La lunghezza deve essere maggiore di 4 caratteri");
      }
    },
    deleteTodo(index){
      this.delList.push(this.list[index]);
      this.list.splice(index,1);
      console.log(this.delList.length);
    },
    delForever(index){
      this.delList.splice(index,1);
    },
    restoreTodo(index){
      this.list.push(this.delList[index]);
      this.delList.splice(index,1);
    },
    delAll(){
      this.delList.splice(0);
    }
  }
});
