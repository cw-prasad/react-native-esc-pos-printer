
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNEscPosPrinterSpec.h"

@interface EscPosPrinter : NSObject <NativeEscPosPrinterSpec>
#else
#import <React/RCTBridgeModule.h>

@interface EscPosPrinter : NSObject <RCTBridgeModule>
#endif

@end
