export class DispatchMoveMapper {
    public static mapMoveToMoveNoList(moveList: any[]) {
        const moveSetNoIdList = moveList.map((item) => {
            return item.moveSetNo;
        })

        return moveSetNoIdList
            .filter((item, pos) => moveSetNoIdList.indexOf(item) === pos)
            .map((item) => {
            return moveList.filter((fItem) => {
                return fItem.moveSetNo === item;
            });
        }).sort((a: any, b: any) => a - b);
    }
}
