class Node {
	constructor(data, priority) {
			this.data = data;
			this.priority = priority;
			this.left = null;
			this.right = null;
			this.parent = null;
	}

	appendChild(node) {
		if(this.left == null || this.right == null)
		{
		if(this.left == null)
			this.left = node;
		else
		if(this.right == null)
			this.right = node;
		node.parent=this;	
		}
	}

	removeChild(node) {
		if(node == this.left)
			{
				node.parent = null;
				this.left  = null;
			}
		else
			if(node == this.right)
			{
				node.parent = null;
				this.right  = null;
			}
			else
			return error;
	}

	remove() {
		if(this.parent != null)
		{
		this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent != null) {
			switch (this) {
				case (this.parent.left): {
					[this.parent.right, this.right] = [this.right, this.parent.right];
					this.parent.left = this.left;
					this.left = this.parent;
					break;
				}
				case (this.parent.right): {
					[this.parent.left, this.left] = [this.left, this.parent.left];
					this.parent.right = this.right;
					this.right = this.parent;
					break;
				}
			}

			if (this.parent.parent != null) {
				switch (this.parent) {
					case (this.parent.parent.left): {
						this.parent.parent.left = this;
						break;
					}
					case (this.parent.parent.right): {
						this.parent.parent.right = this;
						break;
					}
				}
			}

			this.parent = this.parent.parent;

			if (this.left != null) {
				this.left.parent = this;
				if (this.left.left  != null) this.left.left.parent = this.left;
				if (this.left.right != null) this.left.right.parent = this.left;
			}

			if (this.right != null) {
				this.right.parent = this;
				if (this.right.left != null) this.right.left.parent = this.right;
				if (this.right.right != null) this.right.right.parent = this.right;
			}
		}
	}

}

module.exports = Node;
