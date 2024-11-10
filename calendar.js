//	debug
function c( dataIn ){
	console.log( dataIn );
};
//
const LOCALIS	=	{
	calendar: {
		eng:	['M','Tu','W','Th','F','Sa','Su'],
		rus:	['']
	}
};
//
class _table{
	constructor(){};
	//
	create( icells, irows ){
		let _size	=	[ icells, irows ];
		//
		let _table	=	document.createElement( 'table' );
		//
		let _tBody	=	document.createElement( 'tbody' );
		//
		
		//
		return _table;
	};
	//
};
//
class Calendar{
	constructor( objTable, mDays ){
		//
		this.date	=	new Date();
		//
		this._table	=	objTable;
		//
		this._days	=	mDays;
		//
		this.size	=	{ rows: 5, cells: 7 };
	};
	//
	getCalendar(){
		//
		let _row	=	this._table.insertRow( 0 );
		let _cell	=	_row.insertCell( -1 );
		let _text	=	document.createTextNode( this.date.getDate() );
		//
		_cell.appendChild( _text );
	};
	//
};
//
//let Table	=	new _table.create( 7, 5 );
//
//let calendar	=	new Calendar( Table, LOCALIS.calendar.eng );
//
//calendar.getCalendarTo( 'body' );
//
let calendar	=	new Calendar( document.querySelector('.calendar') , LOCALIS.calendar.eng );
//
calendar.getCalendar();






