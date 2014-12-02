{{#with sacramental}}
	<h3 class="text-success text-center">Sacramental - {{data}}</h3>

	<ul class="list-group">
		<li class="list-group-item">
			<div class="row">
				<div class="col-xs-9">VISITANTES</div>
				<div class="col-xs-3">
					<input type="number" class="form-control input-sm pull-right" min="0" value="{{visitantes}}">
				</div>
			</div>
		</li>
	{{#membros}}
		<li class="list-group-item">
			<div class="row">
				<div class="col-xs-9">{{nome}}</div>
				<div class="col-xs-3">
					<button type="button" class="btn btn-sm {{presente ? 'btn-success' : 'btn-danger'}} pull-right" on-click="togglePresente()">{{presente ? 'Presente' : 'Ausente'}}</button>
				</div>
			</div>
		</li>
	{{/membros}}
	</ul>
{{/with}}

<style>
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
	.col-xs-3 button, .col-xs-3 input {
		width: 76px;
		margin-right: -10px;
	}
</style>