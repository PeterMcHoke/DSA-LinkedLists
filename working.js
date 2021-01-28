const { LinkedList } = require('./LinkedList.js');


function main() {
    const SLL = new LinkedList()
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    return SLL;
}

const LL = main()


//————————————————————————————————————————————————————————————————————————
//Display a linked list
function display(LL) {
    let output = ''
    let currNode = LL.head
    while (currNode !== null) {
        output += currNode.val
        if (currNode.next !== null) {
            output += ' -> '
        }
        currNode = currNode.next
    }
    return output
}
console.log(display(LL))
//————————————————————————————————————————————————————————————————————————
function reverseListIter(LL) {
    if (LL.head === null) {
        console.log('Linked list contains no values');
        return;
    }

    let currNode = LL.head;
    let prevNode = null;
    let tempNode = currNode;

    while (currNode !== null) {
        tempNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = tempNode;
    }
    LL.head = prevNode;
    return display(LL);
}
//console.log(reverseListIter(LL));
//————————————————————————————————————————————————————————————————————————
function size(LL) {
    let currNode = LL.head;
    let counter = 0;
    if (LL.head === null)
        return 0;
    else {
        while (currNode !== null) {
            currNode = currNode.next;
            counter++;
        }
        return counter
    }
}
//console.log(`This linked list has ${size(LL)} items`);
//———————————————————————————————————————————————————————————————————————————
function isEmpty(LL) {
    if (LL.head === null)
        return true;
    else
        return false;
}

//console.log(`This list is ${isEmpty(LL) ? `` : `not`} empty`)
//———————————————————————————————————————————————————————————————————————————
function findPrevious(LL, nodeVal) {
    if (LL.head === null) {
        console.log('This list contains no values')
        return '🙃';
    }
    if (LL.head === node) {
        console.log('This is the first element in the list. There is nothing before it 😅')
        return '🙃';
    }
    else {
        let currNode = LL.head;
        let prevNode = LL.head;
        let node = LL.find(nodeVal)
        console.log(display(node))
        while (currNode !== node) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        console.log(`Current: ${currNode}, Previous ${prevNode}`)
        return prevNode.val;
    }

}

console.log(`The value before Starbuck is ${findPrevious(LL, 'Starbuck')}`); 
