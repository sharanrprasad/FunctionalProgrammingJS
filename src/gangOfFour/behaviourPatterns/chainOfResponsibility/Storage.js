class Storage {

  constructor(name, inventory=[], deliveryTime=0){
    this.next = null;
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = 0;
  }

  lookInLocalInventory(itemName){
    let index = this.inventory.map(item => item.name).indexOf(itemName);
    return this.inventory[index];
  }


  //important method
  setNext(storage){
    this.next = storage;
  }

  find(itemName){
    let found = this.lookInLocalInventory(itemName);
    if(found){
      return found;
    }
    return this.next.find(itemName);
  }

}
