function GildedRose(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  
    this.update_quality = function() {
  
      // Before day
      if (this.name == 'Sulfuras, Hand of Ragnaros') return;    
      if ( this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
            this.downgradeItem();
      }
      else {
          this.upgradeItem();
          if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.sell_in < 11) { this.upgradeItem();}
            if (this.sell_in < 6) {this.upgradeItem();}            
          }        
      }
      
      // After day
      this.sell_in = this.sell_in - 1;      
      if (this.sell_in < 0) {
        if (this.name != 'Aged Brie') {
          if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
              this.downgradeItem();
          } else {
            this.quality = this.quality - this.quality
          }
        } else { // AGED BRIE
          this.upgradeItem()
        }
      }
    }
  
    this.upgradeItem = function(){
      if(this.quality< 50) this.quality = this.quality +1;
    }
  
    this.downgradeItem = function(){
      if(this.name.includes("Conjured") && this.quality>1) this.quality = this.quality -2;
      else if(this.quality> 0) {
        this.quality = this.quality -1;
      }
    }     
}
  