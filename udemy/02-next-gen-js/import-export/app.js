import person from './person.js'
import prs from './person.js' // is the same as above, because its default

// named export need to be imported by {name}
import {baseData} from './utility.js' // exact name
import {claen} from './utility.js'
import {baseData as Data} from './utility.js' // define alias

// export all and asign alias bundled.baseData and bundled.clean
import * as bundled from './utility.js' 