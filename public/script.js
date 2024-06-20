//Antes tenía todo en una sola pantalla, cuando separé las 4 (box1, box2, totem y llamador)
//tuve que dividir el js en los html porque no actualizaban los tkt cuando llamaba
/*
// Wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', () => {
  // Get all the necessary elements
  const newTicketBtn = document.getElementById('newTicketBtn');
  const box1Btn = document.getElementById('box1Btn');
  const box2Btn = document.getElementById('box2Btn');
  const currentTicket = document.getElementById('currentTicket');
  const ticketList = document.getElementById('ticketList');
  const box1Ticket = document.getElementById('box1Ticket');
  const box2Ticket = document.getElementById('box2Ticket');
  const ticketSound = document.getElementById('ticketSound');

  // Add event listeners to the buttons
  newTicketBtn.addEventListener('click', () => {
    socket.emit('newTicket');
  });

  box1Btn.addEventListener('click', () => {
    socket.emit('callTicket', 'box1');
  });

  box2Btn.addEventListener('click', () => {
    socket.emit('callTicket', 'box2');
  });

  // Add event listener for the 'updateQueue' event
  socket.on('updateQueue', (tickets) => {
    ticketList.innerHTML = '';
    tickets.slice(0, 3).forEach(ticket => {
      const li = document.createElement('li');
      li.textContent = `Ticket ${ticket.number}`;
      ticketList.appendChild(li);
    });
  });

  // Add event listener for the 'ticketCalled' event
  socket.on('ticketCalled', (currentTickets, nextTickets) => {
    // Update the tickets in the boxes
    if (currentTickets.box1) {
      box1Ticket.textContent = `Ticket ${currentTickets.box1.number}`;
    }
    if (currentTickets.box2) {
      box2Ticket.textContent = `Ticket ${currentTickets.box2.number}`;
    }

    // Update the current ticket
    if (currentTickets.box1 && currentTickets.box2) {
      const latestTicket = currentTickets.box1.number > currentTickets.box2.number ? currentTickets.box1 : currentTickets.box2;
      currentTicket.textContent = `Ticket ${latestTicket.number}`;
    } else if (currentTickets.box1) {
      currentTicket.textContent = `Ticket ${currentTickets.box1.number}`;
    } else if (currentTickets.box2) {
      currentTicket.textContent = `Ticket ${currentTickets.box2.number}`;
    }

    // Play the ticket sound
    ticketSound.play();

    // Update the ticket list
    ticketList.innerHTML = '';
    nextTickets.forEach(ticket => {
      const li = document.createElement('li');
      li.textContent = `Ticket ${ticket.number}`;
      ticketList.appendChild(li);
    });
  });
});*/

