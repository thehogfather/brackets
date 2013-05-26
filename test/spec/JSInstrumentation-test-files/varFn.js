// test_before
var callMe = {{0}}function() {
    console.log('Called me');
}{{1}}
// test_after nextId=1
var callMe = function() {
    // id = 0
    // hasParentId = false
    // parentId = 
    // vars = 
    // before body
    console.log('Called me');
    // after body
}