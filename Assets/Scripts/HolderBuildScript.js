#pragma strict

var attackTowerModel: GameObject;
var tradeTowerModel: GameObject;

function BuildAttackTower()
{
	var instance : GameObject = Instantiate(attackTowerModel,transform.position,transform.rotation);
}

function BuildTradeTower()
{
	var instance : GameObject = Instantiate(tradeTowerModel,transform.position,transform.rotation);
}