function Vector3( data ) {
    var ret = new Float32Array( 3 );
    ret[ '__proto__' ]  = Vector3.prototype;
    if ( data ) {
        ret.set( data );
    }
    return ret;
}

Vector3.prototype = {
    set: function( data ) {
        this[ 0 ] = data[ 0 ];
        this[ 1 ] = data[ 1 ];
        this[ 2 ] = data[ 2 ];
        return this;
    },
    add: function( vector ) {
        this[ 0 ] += vector[ 0 ];
        this[ 1 ] += vector[ 1 ];
        this[ 2 ] += vector[ 2 ];
        return this;
    },
    subtract: function( vector ) {
        this[ 0 ] -= vector[ 0 ];
        this[ 1 ] -= vector[ 1 ];
        this[ 2 ] -= vector[ 2 ];
        return this;
    },
    negate: function() {
        this[ 0 ] = -this[ 0 ];
        this[ 1 ] = -this[ 1 ];
        this[ 2 ] = -this[ 2 ];
        return this;
    },
    scale: function( factor ) {
        this[ 0 ] *= factor;
        this[ 1 ] *= factor;
        this[ 2 ] *= factor;
        return this;
    },
    normalize: function() {
        var x = this[ 0 ], y = this[ 1 ], z = this[ 2 ];
        var len = Math.sqrt( x * x + y * y + z * z);
        
        if ( !len ) {
            this[ 0 ] = 0;
            this[ 1 ] = 0;
            this[ 2 ] = 0;
            return this;
        }
        
        len = 1 / len;
        this[ 0 ] = x * len;
        this[ 1 ] = y * len;
        this[ 2 ] = z * len;
        return this;
    },
    cross: function( vector ) {
        var x = this[ 0 ], y = this[ 1 ], z = this[ 2 ];
        var x2 = vector[ 0 ], y2 = vector[ 1 ], z2 = vector[ 2 ];
        
        this[ 0 ] = y * z2 - z * y2;
        this[ 1 ] = z * x2 - x * z2;
        this[ 2 ] = x * y2 - y * x2;
        return this;
    },
    length: function() {
        var x = this[ 0 ], y = this[ 1 ], z = this[ 2 ];
        return Math.sqrt( x * x + y * y + z * z);
    },
    length2: function() {
        var x = this[ 0 ], y = this[ 1 ], z = this[ 2 ];
        return x * x + y * y + z * z;
    },
    dot: function( vector ) {
        return this[ 0 ] * vector[ 0 ] + this[ 1 ] * vector[ 1 ] + this[ 2 ] * vector[ 2 ];
    },
    clone: function( dest ) {
        if ( !dest ) {
            dest = Vector3();
        }
        return dest.set( this );
    }
};

Vector3.prototype[ '__proto__' ] = Float32Array.prototype;