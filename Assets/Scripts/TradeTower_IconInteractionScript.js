#pragma strict

function OnMouseDown()
{
	gameObject.Find("Holder_GO").SendMessage("BuildTradeTower");
}