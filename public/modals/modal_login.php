<div class="modal fade" v-cloak id="create_user_modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="inputAddress" class="float-left">Email</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-at"></i></span>
                    </div>
                    <input type="text" id="email_recovery" class="form-control" placeholder="Email">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-success"><i class="fa fa-paper-plane"></i> Send</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
</div>