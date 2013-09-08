#pragma strict

private var holder : GameObject;

function OnMouseDown()
{
	holder = gameObject.Find("Holder_GO");
	holder.SendMessage("BuildAttackTower");
}