<div class="text-right">
	<span class="badge">{{membros.length}} Membros</span>
</div>

<ul class="list-group">
{{#membros}}
	<li class="list-group-item">{{nome}}</li>
{{/membros}}
</ul>

<style>
	.text-right {
		padding: 5px 5px 7px;
	}
	.badge {
		background: #18BC9C;
	}
	.list-group {
		margin-bottom: 0 !important;
	}
</style>