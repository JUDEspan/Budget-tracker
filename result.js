var checkArray = JSON.parse(localStorage.getItem("budget"))
        
 if(checkArray && checkArray.length >0 ){
  var totalSpent = 0
  displayAll()
  }

 function deleteAny(i) {
  confirm("Are you sure you want to delete ")
  checkArray.splice(i, 1);
  localStorage.setItem("budget", JSON.stringify(checkArray));
  totalSpent = 0; // Reset totalSpent
  result.innerHTML = ""; // Clear the card display
  displayAll(); // Redisplay the updated cards
}

function editAny(i){
    var pName = tem.value;
    var quak = quan.value;
    var vale = rate.value;
    checkArray[i]["pName"] = pName;
    checkArray[i]["quak"] = quak;
    checkArray[i]["vale"] = vale;
    localStorage.setItem("budget", JSON.stringify(checkArray));
    totalSpent = 0; // Reset totalSpent
    result.innerHTML = ""; // Clear the card display
    displayAll()
  }

  function displayAll(){
    for(i=0; i<checkArray.length; i++ ){
  var item = checkArray[i];
  var itemCost = item.quak * item.vale;
  totalSpent += itemCost;
  result.innerHTML += `
    

        <div class="card">
    <div class="card-img"><div class="img"></div></div>
    <div class="card-title">${item.pName}</div>
    <div class="card-subtitle">Quantity:${item.quak}</div>
    <div class="card-subtitle">Price:${item.vale}</div>
    <div class="card-subtitle">Total: ${itemCost}</div>

    <div class="card-footer">
    <a href="#" class="btn btn-danger" onclick="deleteAny(${i})">Delete</a>
    <a href="#" class="btn btn-warning"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a>
        <div class="card-price"><span>$</span>${item.vale} </div>

    </div>
</div>
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <input type="text" placeholder="Product name" id="tem">
              <input type="number"  placeholder="Quantity" id="quan">
              <input type="number" placeholder="Price" id="rate">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="editAny(${i})" data-bs-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        `
      }
  }
          // <button class="card-btn">
        //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
        // </button>