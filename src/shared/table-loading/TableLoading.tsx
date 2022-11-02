
import { ShimmerCont, TableRowCont, TableRow, ShimmerBox, ShimmerCircle, ShimmerLine, ShimmerSubLine } from 'shared/styles/planetTableStyle'

const TableLoading = () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <ShimmerCont>
            {
                arr.map((item: any, index: number) => (
                    <TableRowCont key={index}>
                        <TableRow>
                            <ShimmerBox>
                                <ShimmerCircle className="animate" />
                            </ShimmerBox>
                            <ShimmerBox >
                                <ShimmerLine className="animate" />
                                <ShimmerSubLine className="animate" />
                            </ShimmerBox>
                            <ShimmerBox>
                                <ShimmerLine className="animate" />
                                <ShimmerSubLine className="animate on-mob" />
                            </ShimmerBox>
                            <ShimmerBox>
                                <ShimmerLine className="animate" />
                                <ShimmerSubLine className="animate on-mob" />
                            </ShimmerBox>
                            <ShimmerBox className='on-web'>
                                <ShimmerLine className="animate" />
                                <ShimmerSubLine className="animate on-mob" />
                            </ShimmerBox>
                            <ShimmerBox className='on-web'>
                                <ShimmerLine className="animate" />
                                <ShimmerSubLine className="animate on-mob" />
                            </ShimmerBox>
                        </TableRow>
                    </TableRowCont>
                ))
            }
        </ShimmerCont>)

};

export default TableLoading;