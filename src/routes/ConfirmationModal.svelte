<style lang="scss">
    #modal-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    padding-top: 30px;
    display: none;
    transition: 0.5s ease all;
    z-index: 99999;
    
    &.active {
        display: block;
        
        #modal-confirmation {
            margin-top: 0;
            opacity: 1;
        }
    }
}

#modal-confirmation {
    display: inline-block;
    margin-top: -30px;
    opacity: 0;
	max-width: 400px;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background: #fff;
    text-align: left;
    transition: 0.5s ease all;
}

#modal-header {
    position: relative;
	background: #ff6b6b;
	padding: 15px;
	color: #fff;
    text-align: left;

	h3 {
		font-weight: 300;
		margin: 0;
	}
}

#modal-close {
    position: absolute;
    right: 15px;
    top: 12px;
    font-size: 1.5em;
    cursor: pointer;
    color: #bd3d3d;
    
    &:hover {
        color: #fff;
    }
}

#modal-content {
	padding: 30px 15px;  
  
	p {
		margin: 0;
		color: #61686e;
	}
}

#modal-buttons {
    padding: 0 15px 15px 15px;
    text-align: right;
}

#modal-button-no {
    border: 2px solid #98a1a9;
    padding: 10px 30px;
    background: #fff;
    color: #98a1a9;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s ease all;
    
    &:hover {
        background: #98a1a9;
        color: #fff;
    }
}

#modal-button-yes {
    border: 2px solid #ff6b6b;
    padding: 10px 50px;
    background: #ff6b6b;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s ease all;
    margin-left: 10px;
    
    &:hover {
        border: 2px solid darken(#ff6b6b, 8%);
        background: darken(#ff6b6b, 8%);
    }
}
</style>

<script>

</script>

<div id="modal-wrapper">
    <div id="modal-confirmation">
        <div id="modal-header">
            <h3>
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                 Confirm Delete
            </h3>
            <span data-confirm=0 class="modal-action" id="modal-close">
                <i class="fa fa-times" aria-hidden="true"></i>
            </span>
        </div>
        <div id="modal-content">
            <p> + text + </p>
        </div>
        <div id="modal-buttons">
            <button class="modal-action" data-confirm=0 id="modal-button-no">No</button>
            <button class="modal-action" data-confirm=1 id="modal-button-yes">Yes</button>
        </div>
    </div>
</div>