const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

input.focus();

      button.addEventListener('click', () => {
        if(input.value != '') {
        //create the elements in the list
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        //change some properties... text content
        li.textContent = input.value;
        deletebutton.textContent = '❌';
        // ... add the button to the li
        li.append(deletebutton);
        list.append(li);
        deletebutton.addEventListener('click', function() {
          list.removeChild(li);
          input.focus();
        });
        input.value = '';
        input.focus();
        }
      });