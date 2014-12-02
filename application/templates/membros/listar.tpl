<div class="text-right">
	<span class="badge badge-success">{{membros.length}} Membros</span>
</div>

<ul class="list-group">
{{#membros}}
	<li class="list-group-item">
		<div class="row">
			<div class="col-xs-9">{{nome}}</div>
			<div class="col-xs-3">
				<button type="button" class="btn btn-sm {{ativo ? 'btn-success' : 'btn-danger'}} pull-right" on-click="toggleAtivo()">{{ativo ? 'Ativo' : 'Inativo'}}</button>
			</div>
		</div>
	</li>
{{/membros}}
</ul>

<style>
	.text-right {
		padding: 5px 5px 7px;
	}
	.badge-success {
		background: #18BC9C;
	}
	.list-group {
		margin-bottom: 0 !important;
	}
	.list-group-item {
		padding-left: 5px;
		padding-top: 5px;
		padding-bottom: 5px;
	}
	.col-xs-9 {
		margin-top: 7px;
	}
	.col-xs-3 button {
		width: 59px;
		margin-right: -10px;
	}
</style>