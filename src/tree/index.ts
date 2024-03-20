class TreeNode{
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

export class BinaryTree{
    root: TreeNode | null;

    constructor(){
        this.root = null
    }

    insert(value: number){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
            
        }else{
            this.insertNode(this.root, newNode)
        }

        //going basck later
    }

    search(number: number, atualNode?: TreeNode): any{
        if (!atualNode) {
            if (!this.root) {
                return "no data provided";
            }
            atualNode = this.root;
        }
    
        if (number > atualNode.value) {
            if (!atualNode.right) {
                return "Number not included on tree";
            }
            return this.search(number, atualNode.right); // Adicione o retorno aqui
        } else if (number < atualNode.value) { // Alterei para else if para evitar execução desnecessária
            if (!atualNode.left) {
                return "Number not included on tree";
            }
            return this.search(number, atualNode.left); // Adicione o retorno aqui
        } else {
            console.log("number founded on tree");
            return atualNode
        }
    }
    
    private insertNode(node: TreeNode, newNode: TreeNode){
        if(newNode.value < node.value){
            if(!node.left){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if(!node.right){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode)
            }
        }
    }
}