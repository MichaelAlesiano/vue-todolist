let app = new Vue ({
  el : '#root',
  data : {
    list : [
      'Fare i compiti',
      'Fare la spesa',
      'Pulire la stanza',
      'Pulire il bagno'
    ],
    delList : [],
    delDel : [],
  },
  methods : {
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
    delAll(index){
      this.delList.splice(index,this.delList.length);
    }
  }
});
