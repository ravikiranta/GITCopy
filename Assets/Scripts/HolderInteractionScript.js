#pragma strict

private var toggler : boolean = true;

private var attackTower : GameObject; 
private var tradeTower : GameObject;

function Start()
{
	attackTower = GameObject.Find("AttackTower_Icon");
	tradeTower = GameObject.Find("TradeTower_Icon");
	attackTower.SetActive(true);
	tradeTower.SetActive(true);
}

function OnMouseDown()
{
	toggler = !toggler;
	
	attackTower.SetActive(toggler);
	tradeTower.SetActive(toggler);
}