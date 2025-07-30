let rooms = [];

function initializeRooms() {
  rooms = [];
  for (let f = 1; f <= 10; f++) {
    const roomCount = f === 10 ? 7 : 10;
    for (let r = 1; r <= roomCount; r++) {
      const roomNum = f === 10 ? 1000 + r : f * 100 + r;
      rooms.push({ room: roomNum, floor: f, occupied: false });
    }
  }
  renderRooms();
}

function renderRooms() {
  const container = document.getElementById("hotelLayout");
  container.innerHTML = "";
  for (let f = 10; f >= 1; f--) {
    const floorRooms = rooms.filter(r => r.floor === f);
    const floorDiv = document.createElement("div");
    floorDiv.className = "floor";
    floorDiv.innerHTML = `<strong>Floor ${f}</strong>: ` +
      floorRooms.map(r => `<span class="room ${r.occupied ? 'occupied' : ''}" id="room-${r.room}">${r.room}</span>`).join('');
    container.appendChild(floorDiv);
  }
}

function generateRandomOccupancy() {
  rooms.forEach(r => r.occupied = Math.random() < 0.3);
  renderRooms();
}

function resetRooms() {
  rooms.forEach(r => r.occupied = false);
  renderRooms();
}

function bookRooms() {
  const count = parseInt(document.getElementById("roomCount").value);
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Enter a valid number of rooms (1–5)");
    return;
  }

  const available = rooms.filter(r => !r.occupied);
  const groups = getRoomGroups(available, count);

  if (groups.length === 0) {
    alert("No suitable room combinations available.");
    return;
  }

  const best = groups.sort((a, b) => getTravelTime(a) - getTravelTime(b))[0];
  best.forEach(r => r.occupied = true);
  renderRooms();
}

function getRoomGroups(available, count) {
  const combos = [];

  // Try same floor first
  for (let f = 1; f <= 10; f++) {
    const onFloor = available.filter(r => r.floor === f);
    if (onFloor.length >= count) {
      combos.push(...k_combinations(onFloor, count));
    }
  }

  // Across floor combinations
  if (combos.length === 0) {
    combos.push(...k_combinations(available, count));
  }

  return combos;
}

function getTravelTime(group) {
  const sorted = group.sort((a, b) => a.room - b.room);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const floorDiff = Math.abs(min.floor - max.floor);
  const horizontalDiff = Math.abs((min.room % 100 || min.room % 1000) - (max.room % 100 || max.room % 1000));
  return floorDiff * 2 + horizontalDiff;
}

function k_combinations(set, k) {
  let i, j, combs, head, tailcombs;

  if (k > set.length || k <= 0) return [];
  if (k === set.length) return [set];
  if (k === 1) return set.map(el => [el]);

  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = k_combinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

initializeRooms();
