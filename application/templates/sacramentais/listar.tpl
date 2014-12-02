<div class="panel-body">
	<div class="input-group">
		<input type="date" class="form-control">
		<span class="input-group-btn">
			<button type="button" class="btn btn-success" on-click="addSacramental()">Salvar</button>
		</span>
	</div>
</div>

<div style="padding:0 10px;">
	<table class="table table-condensed table-bordered">
		<thead>
			<tr>
				<th>DATA</th>
				<th width="50">PRESENTES</th>
				<th width="50">AUSENTES</th>
				<th width="50"></th>
			</tr>
		</thead>
		<tbody>
		{{#sacramentais}}
			<tr style="cursor: pointer;">
				<td on-click="showSacramental()" class="text-center">{{data}}</td>
				<td on-click="showSacramental()" class="text-center text-success">{{presentes}}</td>
				<td on-click="showSacramental()" class="text-center text-danger">{{ausentes}}</td>
				<td>
					<button type="button" class="btn btn-sm btn-danger" on-click="removerSacramental()">Remover</button>
				</td>
			</tr>
		{{else}}
			<tr>
				<td colspan="4" class="text-center">Nenhuma sacramental cadastrada!</td>
			</tr>
		{{/sacramentais}}
		</tbody>
	</table>
</div>

<style>
	.panel-body {
		padding: 10px;
	}
	.btn-info {
		margin-top: 10px;
	}
	table {
		margin-bottom: 0 !important;
	}
	table th {
		font-size: 12px;
		text-align: center;
	}
	table td {
		vertical-align: middle !important;
	}
	.list-group {
		margin-bottom: 0 !important;
	}
	p {
		padding: 20px;
	}
	.badge {
		width: 50px;
	}
	.badge-danger {
		background: #e74c3c;
	}
	.badge-success {
		background: #18BC9C;
	}
</style>