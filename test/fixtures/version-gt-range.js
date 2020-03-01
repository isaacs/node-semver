// [range, version, options]
// Version should be greater than range
module.exports = [
  ['~1.2.2', '1.3.0'],
  ['~0.6.1-1', '0.7.1-1'],
  ['1.0.0 - 2.0.0', '2.0.1'],
  ['1.0.0', '1.0.1-beta1'],
  ['1.0.0', '2.0.0'],
  ['<=2.0.0', '2.1.1'],
  ['<=2.0.0', '3.2.9'],
  ['<2.0.0', '2.0.0'],
  ['0.1.20 || 1.2.4', '1.2.5'],
  ['2.x.x', '3.0.0'],
  ['1.2.x', '1.3.0'],
  ['1.2.x || 2.x', '3.0.0'],
  ['2.*.*', '5.0.1'],
  ['1.2.*', '1.3.3'],
  ['1.2.* || 2.*', '4.0.0'],
  ['2', '3.0.0'],
  ['2.3', '2.4.2'],
  ['~2.4', '2.5.0'], // >=2.4.0 <2.5.0
  ['~2.4', '2.5.5'],
  ['~>3.2.1', '3.3.0'], // >=3.2.1 <3.3.0
  ['~1', '2.2.3'], // >=1.0.0 <2.0.0
  ['~>1', '2.2.4'],
  ['~> 1', '3.2.3'],
  ['~1.0', '1.1.2'], // >=1.0.0 <1.1.0
  ['~ 1.0', '1.1.0'],
  ['<1.2', '1.2.0'],
  ['< 1.2', '1.2.1'],
  ['1', '2.0.0beta', true],
  ['~v0.5.4-pre', '0.6.0'],
  ['~v0.5.4-pre', '0.6.1-pre'],
  ['=0.7.x', '0.8.0'],
  ['=0.7.x', '0.8.0-asdf'],
  ['<0.7.x', '0.7.0'],
  ['~1.2.2', '1.3.0'],
  ['1.0.0 - 2.0.0', '2.2.3'],
  ['1.0.0', '1.0.1'],
  ['<=2.0.0', '3.0.0'],
  ['<=2.0.0', '2.9999.9999'],
  ['<=2.0.0', '2.2.9'],
  ['<2.0.0', '2.9999.9999'],
  ['<2.0.0', '2.2.9'],
  ['2.x.x', '3.1.3'],
  ['1.2.x', '1.3.3'],
  ['1.2.x || 2.x', '3.1.3'],
  ['2.*.*', '3.1.3'],
  ['1.2.*', '1.3.3'],
  ['1.2.* || 2.*', '3.1.3'],
  ['2', '3.1.2'],
  ['2.3', '2.4.1'],
  ['~2.4', '2.5.0'], // >=2.4.0 <2.5.0
  ['~>3.2.1', '3.3.2'], // >=3.2.1 <3.3.0
  ['~1', '2.2.3'], // >=1.0.0 <2.0.0
  ['~>1', '2.2.3'],
  ['~1.0', '1.1.0'], // >=1.0.0 <1.1.0
  ['<1', '1.0.0'],
  ['1', '2.0.0beta', true],
  ['<1', '1.0.0beta', true],
  ['< 1', '1.0.0beta', true],
  ['=0.7.x', '0.8.2'],
  ['<0.7.x', '0.7.2']
]
